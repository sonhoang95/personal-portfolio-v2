const TechStacks = ({ techStack }: { techStack: string[] }) => {
  return (
    <ul className="flex gap-4 items-center text-slate text-xs lg:text-sm font-thin font-fira mb-6">
      {techStack.map((item, index) => (
        <li
          key={index}
          className="px-2 py-1 rounded bg-[#1d355d] text-[#ccd6f6]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TechStacks;
