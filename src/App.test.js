import { render, screen } from '@testing-library/react';
import UsersInvites from "./Users";

test('renders learn react link', () => {
  render(<UsersInvites />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
