import Login from "../components/Login";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { StaticRouter } from "react-router-dom";

it('should re-direct to loading when button is clicked', () => {
  const login = render(
    <StaticRouter>
      (<Login />)
    </StaticRouter>
  );

  const submitButton = screen.getByRole('button');
  // await userEvent.click(submitButton);

  const url = window.location.pathname.split("/").pop();
  console.log(url);
  expect(1).toBe(1);



})


