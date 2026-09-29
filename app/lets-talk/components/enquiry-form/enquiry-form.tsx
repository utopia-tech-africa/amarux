"use client";

import { type FormEvent, useState } from "react";
import { ArrowSquareUpRightIcon, CaretDownIcon } from "@/assets/svg";
import { Container } from "@/components/container";
import { cn } from "cn";

const LOOKING_TO_OPTIONS = [
  "Buy a property",
  "Sell a property",
  "Invest",
  "Legal guidance",
  "Due diligence",
  "Other",
] as const;

const PROPERTY_TYPE_OPTIONS = [
  "Residential",
  "Commercial",
  "Land",
  "Mixed-use",
  "Other",
] as const;

const fieldClassName = cn(
  "w-full border-0 border-b border-[#a8a8a8] bg-transparent px-1 pb-6 pt-3",
  "font-heading text-lg font-normal uppercase leading-[1.2] text-cream",
  "outline-none transition-colors placeholder:text-cream",
  "hover:border-gold-soft focus:border-gold-soft",
);

const selectClassName = cn(
  fieldClassName,
  "cursor-pointer appearance-none pr-10",
);

export function EnquiryForm() {
  const [lookingTo, setLookingTo] = useState("");
  const [propertyType, setPropertyType] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      aria-label="Enquiry form"
      className="relative isolate min-h-svh bg-navy text-cream"
    >
      <Container className="flex min-h-svh flex-col justify-center gap-12 py-28 md:gap-16 md:py-32 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,37rem)] lg:items-start lg:gap-16 xl:gap-24">
        <div className="max-w-[23rem]">
          <h1 className="font-heading text-[clamp(2.5rem,6vw,3.75rem)] font-bold uppercase leading-[1.2] text-white">
            Let&apos;s talk
          </h1>
          <p className="mt-2 font-heading text-lg font-normal uppercase leading-[1.2] text-cream">
            tell us what you are interested in
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-8"
          noValidate
        >
          <label className="sr-only" htmlFor="enquiry-name">
            Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            placeholder="Name"
            autoComplete="name"
            className={fieldClassName}
          />

          <label className="sr-only" htmlFor="enquiry-email">
            Email
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            className={fieldClassName}
          />

          <label className="sr-only" htmlFor="enquiry-phone">
            Phone
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            autoComplete="tel"
            className={fieldClassName}
          />

          <label className="sr-only" htmlFor="enquiry-subject">
            Subject
          </label>
          <input
            id="enquiry-subject"
            name="subject"
            type="text"
            placeholder="Subject"
            className={fieldClassName}
          />

          <div className="relative">
            <label className="sr-only" htmlFor="enquiry-looking-to">
              I am looking to
            </label>
            <select
              id="enquiry-looking-to"
              name="lookingTo"
              value={lookingTo}
              onChange={(event) => setLookingTo(event.target.value)}
              className={cn(
                selectClassName,
                !lookingTo && "text-cream",
              )}
            >
              <option value="" disabled>
                I am looking to....
              </option>
              {LOOKING_TO_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-navy text-cream">
                  {option}
                </option>
              ))}
            </select>
            <CaretDownIcon className="pointer-events-none absolute right-1 top-1/2 size-5 -translate-y-1/2 text-cream" />
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="enquiry-property-type">
              Type of property
            </label>
            <select
              id="enquiry-property-type"
              name="propertyType"
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
              className={selectClassName}
            >
              <option value="" disabled>
                Type of property
              </option>
              {PROPERTY_TYPE_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-navy text-cream">
                  {option}
                </option>
              ))}
            </select>
            <CaretDownIcon className="pointer-events-none absolute right-1 top-1/2 size-5 -translate-y-1/2 text-cream" />
          </div>

          <label className="sr-only" htmlFor="enquiry-message">
            Anything else to share
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={3}
            placeholder="Anything else to share?"
            className={cn(fieldClassName, "resize-none")}
          />

          <button
            type="submit"
            className="inline-flex w-fit cursor-pointer items-center gap-2.5 px-6 py-3 font-heading text-lg font-bold uppercase leading-[1.3] text-gold-soft transition-opacity hover:opacity-80"
          >
            Let&apos;s talk
            <ArrowSquareUpRightIcon className="size-6" />
          </button>
        </form>
      </Container>
    </section>
  );
}
