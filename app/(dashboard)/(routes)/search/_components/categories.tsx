"use client";

import { Category } from "@prisma/client";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiRuby,
  SiMysql,
} from "react-icons/si";
import CategoryItem from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Ruby: SiRuby,
  Node: SiNodedotjs,
  MySQL: SiMysql,
};

const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};

export default Categories;
