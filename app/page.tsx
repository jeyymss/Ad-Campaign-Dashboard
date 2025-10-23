"use client"

import { useState, useEffect } from "react"
import { Search, Loader2, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PostsGrid from "@/components/post/postGrid"
import FilterTabs from "@/components/filter/filterTabs"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) throw new Error("Failed to fetch posts")
        const data = await response.json()
        setPosts(data)
        setFilteredPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Filter posts
  useEffect(() => {
    let filtered = posts

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.id.toString().includes(searchQuery),
      )
    }

    if (selectedUserId) {
      filtered = filtered.filter((post) => post.userId === selectedUserId)
    }

    setFilteredPosts(filtered)
  }, [searchQuery, selectedUserId, posts])

  const uniqueUserIds = Array.from(new Set(posts.map((p) => p.userId))).sort((a, b) => a - b)

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Ad Campaign Dashboard</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Explore a curated collection of posts from our community
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full mx-auto mb-10">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5"/>
            </span>
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Title, Content, or Post ID"
              className="w-full rounded-full border border-black focus:ring-2 focus:black pl-10 pr-4 py-2 text-gray-700 placeholder-gray-400 outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Filter Tabs */}
         {uniqueUserIds.length > 0 && (
          <FilterTabs userIds={uniqueUserIds} selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} />
        )} 

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground text-lg">Loading posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <Card className="border-destructive/50 bg-destructive/5 mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <CardTitle className="text-destructive">Error Loading Posts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-destructive/80">{error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4" variant="outline">
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        {/* No Results State */}
        {!loading && !error && filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              {searchQuery || selectedUserId
                ? "Try adjusting your search or filter criteria"
                : "No posts available at the moment"}
            </p>
            {(searchQuery || selectedUserId) && (
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedUserId(null)
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            )}
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && filteredPosts.length > 0 && (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> of{" "}
                <span className="font-semibold text-foreground">{posts.length}</span> posts
              </p>
            </div>
            <PostsGrid posts={filteredPosts} />
          </>
        )}
      </div>
    </main>
  )
}
