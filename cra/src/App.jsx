import React from "react";
import Card from "./components/Card";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Button from "./components/Button";
import ThemeSelect from "./components/ThemeSelect";

function App() {
  return (
    <Card>
      <Logo />
      <Heading>Fullstacks Academy</Heading>
      <ThemeSelect />
      <Input type="text" placeholder="Your name..." />
      <Button>Login</Button>
    </Card>
  );
}

export default App;
