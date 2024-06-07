"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const localActive = useLocale();

  const t = useTranslations("LocalSwitcher");

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="absolute right-0 top-0 m-16">
      <label>
        <p className="sr-only">{t("change")}</p>
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value={"fr"}>{t("fr")}</option>
          <option value={"en"}>{t("en")}</option>
        </select>
      </label>
    </div>
  );
}
