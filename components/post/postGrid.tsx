"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface PostsGridProps {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsGridProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  return (
    <>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
        {posts.map((post) => (
          <Card
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3 mb-2">
                <Badge variant="secondary" className="text-xs">
                  Post #{post.id}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  User {post.userId}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{post.body}</p>
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">User ID:</span> {post.userId}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

     
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedPost.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-3 py-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Post #</span> {selectedPost.id}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">User ID:</span> {selectedPost.userId}
                </p>
                <div className="mt-4">
                  <p className="text-sm text-foreground whitespace-pre-line">
                    {selectedPost.body}
                  </p>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedPost(null)} className="hover:cursor-pointer">
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
