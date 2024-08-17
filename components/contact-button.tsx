"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ContactButton = ({ ...props }: React.ComponentProps<typeof Button>) => {
  return (
    <Link href="/contact">
      <Button
        {...props}
        variant={"secondary"}
        type="button"
        className={cn("flex gap-5", props.className)}
        size={props.size || "lg"}
      >
        Nous contacter
      </Button>
    </Link>
  );
};

export default ContactButton;
