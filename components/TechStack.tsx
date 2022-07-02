export interface TechStacksProps {
  techStack: string[];
  isOtherProject?: boolean;
  isProjectDetails?: boolean;
}
const TechStacks = ({
  techStack,
  isOtherProject,
  isProjectDetails,
}: TechStacksProps) => {
  let tempTechStacks: string[];
  if (isOtherProject) {
    tempTechStacks = techStack.slice(0, 3);
  } else if (!isProjectDetails) {
    tempTechStacks = techStack.slice(0, 4);
  } else {
    tempTechStacks = techStack;
  }

  return (
    <ul className="flex gap-4 flex-wrap items-center text-slate text-xs lg:text-sm font-thin font-fira mb-6">
      {tempTechStacks.map((item, index) => (
        <li
          key={index}
          className={`px-2 py-1 rounded bg-[#1d355d] text-[#ccd6f6] ${
            isOtherProject ? "text-xs bg-transparent px-0" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TechStacks;
