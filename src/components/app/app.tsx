import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = styled.button(() => [
  tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
]);

interface Props {}

export function App({}: Props) {
  return (
    <>
      <h1>Hello SnowPack</h1>
      <Button>Test Button</Button>
    </>
  );
}
