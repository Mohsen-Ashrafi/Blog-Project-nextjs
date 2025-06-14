import Avatar from "@/ui/Avatar";
import React from "react";

interface AuthorProps {
  name: string;
  avatarUrl: string;
}

function Author({ name, avatarUrl }:AuthorProps) {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar src={avatarUrl} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
}

export default Author;
