export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t-[1px] flex flex-col gap-2 items-center py-6 pb-5">
      <span>José Victor Front-end Developer</span>
      <ul className="flex justify-center gap-8">
        <li>
          <a
            className="underline hover:text-purple"
            href="https://www.instagram.com/victor_mdrss/"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-purple"
            href="https://www.linkedin.com/in/josevictordev/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-purple"
            href="https://github.com/victormedeiros1"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-purple"
            href="https://www.figma.com/@victormedeiros1"
            target="_blank"
          >
            Figma
          </a>
        </li>
      </ul>
    </footer>
  );
}
