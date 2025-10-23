"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterTabsProps {
  userIds: number[]
  selectedUserId: number | null
  onSelectUser: (userId: number | null) => void
}

export default function FilterTabs({ userIds, selectedUserId, onSelectUser }: FilterTabsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-muted-foreground">Filter by User:</span>
        {selectedUserId && (
          <Button onClick={() => onSelectUser(null)} variant="ghost" size="sm" className="h-7 px-2 text-xs hover:cursor-pointer">
            Clear <X className="w-3 h-3 ml-1" />
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {userIds.map((userId) => (
          <Button
            key={userId}
            onClick={() => onSelectUser(selectedUserId === userId ? null : userId)}
            variant={selectedUserId === userId ? "default" : "outline"}
            size="sm"
            className="transition-all hover:cursor-pointer"
          >
            User {userId}
          </Button>
        ))}
      </div>
    </div>
  )
}
