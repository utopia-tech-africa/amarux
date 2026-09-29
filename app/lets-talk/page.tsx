import type { Metadata } from "next";
import { EnquiryForm } from "./components";

export const metadata: Metadata = {
  title: "Let’s talk | Amarux",
  description: "Tell us what you are interested in — reach out to Amarux.",
};

export default function LetsTalkPage() {
  return (
    <main className="flex-1">
      <EnquiryForm />
    </main>
  );
}
