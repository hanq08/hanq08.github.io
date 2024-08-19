import { Button, Hero } from "react-daisyui";

export default function VTrace() {
  return (
    <Hero className="grid-cols-[minmax(0,1fr)]">
      <Hero.Content className="text-center">
        <div className="w-10/12">
          <h1 className="text-5xl font-bold">VertexTrace</h1>
          <p className="py-6 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="h-72 bg-gray-700">
            VSCode gif/screenshot placeholder
          </div>
          <Button className="my-16 outline">Get started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
