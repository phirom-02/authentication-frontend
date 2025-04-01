import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stack } from "@/components/ui/stack";

export default function SignupForm() {
  return (
    <Stack className="p-2 gap-2">
      <Input placeholder="username" />
      <Input placeholder="email" />
      <Input placeholder="password" />

      <Button className="bg-blue-500 text-blue-50 mt-auto">Signup</Button>
    </Stack>
  );
}
