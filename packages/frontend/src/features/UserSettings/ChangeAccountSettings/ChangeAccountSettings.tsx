import { LoaderIcon } from "lucide-react"
import Image from "next/image"

import { useChangeAccountForm } from "./useChangeAccountForm"
import { SettingsSection } from "@/entities/user"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  PasswordInput,
  UploadInput
} from "@/shared/ui"

const ChangeAccountSettings = () => {
  const { form, functions, profile, state } = useChangeAccountForm()

  return (
    <SettingsSection
      heading="Profile information"
      description="Change your account information. Keeping this information up to date ensures that your account remains secure and accessible"
    >
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile?.email}
                    type="email"
                    heading="email"
                    className="bg-white"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile?.login}
                    type="text"
                    heading="login"
                    className="bg-white"
                    placeholder="Enter your login"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-center gap-4">
            <Image
              src={profile?.image ?? ""}
              alt="avatar"
              className="aspect-square rounded-full object-cover"
              width={65}
              height={65}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormControl>
                    <UploadInput onCustomChange={onChange} type="file" className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    disabled={!form.getValues("newPassword")}
                    {...field}
                    type="text"
                    heading="Old Password"
                    className="bg-white"
                    placeholder="Enter your old password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    {...field}
                    type="text"
                    heading="New Password"
                    className="bg-white"
                    placeholder="Enter your new password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-end justify-end gap-2">
            <Button
              disabled={state.loading}
              type="submit"
              variant={"outline"}
              className="w-20"
              size={"sm"}
            >
              Cancel
            </Button>
            <Button disabled={state.loading} type="submit" className="w-32" size={"sm"}>
              {state.loading && <LoaderIcon className="mr-2 animate-spin" size={16} />}
              Save changes
            </Button>
          </div>
        </form>
      </Form>
    </SettingsSection>
  )
}

export { ChangeAccountSettings }
