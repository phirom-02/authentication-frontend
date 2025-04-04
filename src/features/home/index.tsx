import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";
import { createLazyRoute, Link } from "@tanstack/react-router";

function Page() {
  return (
    <Stack className="gap-2 p-2">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl leading-14">
        Welcome to a
        <br />
        <span className="text-blue-500 bg-blue-200"> COOL homepage!!!</span>
      </h1>
      <p className="leading-5 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        quia, consequuntur enim earum repellat distinctio atque dolor quod
        reprehenderit maiores possimus adipisci molestiae perferendis dicta
        laboriosam quaerat fugit quasi ad.
      </p>
      <Button className="bg-blue-500 text-blue-50 mt-auto">
        <Link to="/signup">Get started!</Link>
      </Button>
    </Stack>
  );
}

const Home = createLazyRoute("home")({
  component: Page,
});

export default Home;
