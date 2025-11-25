import { Dock, Navbar, Welcome } from "#components";
import {
  ContactWindow,
  FinderWindow,
  ImageFile,
  ResumeWindow,
  SafariWindow,
  TerminalWindow,
  TextFile,
} from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/draggable";
gsap.registerPlugin(Draggable);

export default function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <TextFile />
      <ImageFile />
      <FinderWindow />
      <ContactWindow />
    </main>
  );
}
