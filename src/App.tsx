import { marked } from "marked";
import React, { useEffect, useState } from "react";

const Editor = ({
  onChange,
  msg,
}: {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  msg: string;
}) => {
  return (
    <div id="editor-div" className="border border-primary rounded border-4">
      <h3 className="p-1 mb-0 text-light text-start bg-primary">Editor</h3>
      <textarea
        name="editor"
        id="editor"
        cols={64}
        rows={10}
        onChange={onChange}
        defaultValue={msg}
      ></textarea>
    </div>
  );
};

const Previewer = ({ input }: { input: string }) => {
  return (
    <div id="previewer" className="mt-3 border border-primary rounded border-4">
      <h3 className="p-1 mb-0 text-light text-start bg-primary">Previewer</h3>
      <div
        id="preview"
        className="mt-0 bg-light p-4 text-break overflow-auto"
        dangerouslySetInnerHTML={{
          __html: marked(input),
        }}
      >
        {/* Parsing the text */}
      </div>
    </div>
  );
};

export const App = () => {
  const [input, setInput] = useState<string>("");
  const msg: string = `
# Uh, look, okay
## I'm hopping that somebody pray for me
### I'm praying that somebody hope for me
**I'm staying where nobody 'posed to be**
*P-p-posted, being a wreck of emotions*
> Ready to go whenever just let me know
1. The road is long so put the pedal into the floor
2. The enemy's on my trail, my energy unavailable
3. I'm tell 'em: Hasta luego
- They wanna plot on my trot to the top
  - I've been outta shape, thinking out the box
    - I'm an astronaut

\`I blashed off the planet rock to cause catastrophe\`
---
\`\`\`
And it matters more because I had it not
Had I thought about wreaking havoc on a opposition
Kinda shockin' they wanted static with
\`\`\`
- precision I'm automatic quaterback
  - I ain't talking sacking, pack it, pack it up,
1. I don't panic
[Batter, batter up, who the baddest?](https://youtu.be/D9G1VOjN_84?si=NRyffgMzCvYb0GOk)
![It don't matter 'cause we at ya throat](https://i.ytimg.com/vi/D9G1VOjN_84/hq720.jpg?sqp=-oaymwEpCOgCEMoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLB5G__u4WzFAf1TbcYPnDbPceRkcw)`;

  marked.setOptions({
    breaks: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Get input in the textarea
    const input: string = event.target.value;
    // Set new input
    setInput(input);
  };

  useEffect(() => {
    setInput(msg);
  }, []);

  return (
    <div className="vh-100 p-4">
      <Editor onChange={handleChange} msg={msg} />
      <Previewer input={input} />
    </div>
  );
};
