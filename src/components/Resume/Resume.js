import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import ResumeItem from "../ResumeItem/ResumeItem";

const Resume = () => {

    const [items, setItems] = useState([
        {
          id: 1,
          title: "Profile Summary",
          description:
            "This is a Description for Profile Summary section. A concise overview about You",
          enabled: true,
        },
        {
          id: 2,
          title: "Academic and Cocurricular Achievements",
          description:
            "This is a Description for Academic and Cocurricular Achievements that Highlights academic awards",
          enabled: true,
        },
        {
          id: 3,
          title: "Summer Internship Experience",
          description:
            "This is a Description for Summer Internship Experience that You have during your summer Internship.",
          enabled: true,
        },
        {
          id: 4,
          title: "Work Experience",
          description:
            " This is a Description for Work Experience that tells  about your  job positions or responsibilities",
          enabled: true,
        },
        {
          id: 5,
          title: "Projects",
          description:
            "This is a Description for Projects  you have completed, that describe skills.",
          enabled: true,
        },
        {
          id: 6,
          title: "Certifications",
          description:
            "This is a Description for Certifications that you have achieved completing your skill course work that act as a proof.",
          enabled: true,
        },
        {
          id: 7,
          title: "Leadership Positions",
          description:
            "This is a Description for Leadership Positions that  Describes your leadership Qualitys ",
          enabled: true,
        },
        {
          id: 8,
          title: "Extracurricular",
          description:
            "This is a Description for Extracurricular Includes involvement in extracurricular activities",
          enabled: true,
        },
        {
          id: 9,
          title: "Education",
          description:
            "This is a Description for Education that tells a Breif  about your educational Details ",
          enabled: true,
        },
      ]);
    
      const handleToggle = (title) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.title === title ? { ...item, enabled: !item.enabled } : item
          )
        );
      };
    
      const handleEdit = (oldTitle, newTitle) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.title === oldTitle ? { ...item, title: newTitle } : item
          )
        );
      };
    
      const handleDragEnd = (event) => {
        const { active, over } = event;
        
        if (!active.id !== over.id) {
          setItems((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);
            return arrayMove(items, oldIndex, newIndex);
          });
        }
      };
    
      const [editId, setEditId] = useState(-1);
      const onEditId = (id) => {
        setEditId(id);
      };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item) => (
            <ResumeItem
              key={item.id}
              itemData={item}
              onEdit={handleEdit}
              onToggle={handleToggle}
              editId={editId}
              onEditId={onEditId}
            />
          ))}
        </SortableContext>
      </DndContext>
  )
}

export default Resume