"use client";

import { RegisterInputProps } from "@/@types";
import {
  EyeIcon,
  EyeSlashIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function RegisterInput({
  label,
  nickname,
  placeholder,
  type,
  register,
  errors,
}: RegisterInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validationRules = {
    nickname: {
      required: "The nickname is required.",
      minLength: { value: 5, message: "Minimum of 5 characters." },
      maxLength: { value: 18, message: "Maximum of 18 characters." },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Only letters from A to Z.",
      },
    },
    email: {
      required: "The e-mail is required.",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid e-mail.",
      },
    },
    password: {
      required: "The password is required.",
      minLength: { value: 8, message: "Minimum of 8 characters." },
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/,
        message:
          "Must contain uppercase, lowercase, number and special character.",
      },
    },
  };

  const hasError = !!errors?.[nickname];
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <main className="font-main flex w-full flex-col gap-1">
      <label className="text-light-2 text-sm font-medium">
        {label} <span className="text-error">*</span>
      </label>

      <section className="relative">
        <input
          type={inputType}
          autoComplete="off"
          placeholder={placeholder}
          className={`text-dark-1 bg-light-2 placeholder:text-light-1 h-10 w-full rounded-lg border-2 px-4! py-1! text-sm ${hasError ? "border-error" : "border-light-2"} `}
          {...register(nickname, validationRules[type])}
        />

        {type === "password" && (
          <button
            type="button"
            className="text-light-2 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeIcon size={20} className="text-dark-1 cursor-pointer" />
            ) : (
              <EyeSlashIcon size={20} className="text-dark-1 cursor-pointer" />
            )}
          </button>
        )}
      </section>

      {errors?.[nickname] && (
        <p className="flex items-start justify-start gap-1 text-[10px] text-red-400">
          <WarningCircleIcon size={16} className="text-error" />

          {errors[nickname]?.message}
        </p>
      )}
    </main>
  );
}
