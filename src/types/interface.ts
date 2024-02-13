import { Key } from "react";

export interface itemProps {
  featured: boolean;
  id: Key | null | undefined;
  logo: string;
  company: string;
  new: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string | string[];
  tools: string | string[] | undefined;
}
