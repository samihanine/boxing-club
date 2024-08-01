"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "react-toastify";
import ContactMap from "./contact-map";
import { AtSignIcon, HomeIcon, PhoneIcon } from "lucide-react";

export default function Contact() {
  return (
    <section>
      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-10 sm:gap-20 flex-col sm:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Contactez-nous
            </h1>

            <p className="mt-4 text-base text-muted-foreground">
              Pour toutes questions ou pour planifier votre séance d'essai,
              n'hésitez pas à nous contacter via le formulaire ci-dessous. Au
              plaisir de vous rencontrer et de vous voir sur le ring !
            </p>

            <div className="flex flex-col mt-10 gap-10">
              <div className="flex gap-5 items-center">
                <HomeIcon className="w-6 h-6 text-secondary" />
                <span className="font-medium">
                  1 Rue Dominique Perfetti, 69001 Lyon
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <PhoneIcon className="w-6 h-6 text-secondary" />
                <a href="tel:+3360254850" className="font-medium">
                  07 60 25 48 50
                </a>
              </div>
              <div className="flex gap-5 items-center">
                <AtSignIcon className="w-6 h-6 text-secondary" />
                <a
                  href="mailto:croixrousseboxingclub@gmail.com"
                  className="font-medium"
                >
                  croixrousseboxingclub@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
        <ContactMap />
      </div>
    </section>
  );
}

function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const companyName = formData.get("companyName") as string;
    const message = formData.get("message") as string;

    console.log({
      firstName,
      lastName,
      companyName,
      email,
      message,
    });

    if (error) {
      setError(error);
      setLoading(false);
      return;
    } else {
      setLoading(false);

      const form = document.getElementById("contact-form") as HTMLFormElement;
      form.reset();

      toast.success("Votre message a bien été envoyé !");
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 h-full justify-center">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Prénom Nom <span className="text-pink-500">*</span>
          </label>
          <Input
            name="name"
            className="form-input w-full"
            type="text"
            placeholder="Ex: John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email <span className="text-pink-500">*</span>
          </label>
          <Input
            name="email"
            className="form-input w-full"
            type="email"
            placeholder="Ex: johndoe@exemple.fr"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Téléphone
          </label>
          <Input
            name="phone"
            className="form-input w-full"
            type="tel"
            placeholder="Ex: 06 12 34 56 78"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="role">
            Votre message
            <span className="text-pink-500">*</span>
          </label>
          <Textarea
            name="message"
            className="form-textarea w-full"
            required
            placeholder="Tappez votre message ici"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm font-medium">{error}</div>
        )}

        <Button
          className="px-8 inline-flex items-center !w-fit group mt-6"
          disabled={loading}
          variant={"secondary"}
          size={"lg"}
        >
          {loading ? "Chargement..." : "Envoyer"}
        </Button>
      </form>
    </div>
  );
}
