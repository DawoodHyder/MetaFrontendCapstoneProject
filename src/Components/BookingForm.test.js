import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm static text", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
    const textElement = screen.getByText("BookingForm");
    expect(textElement).toBeInTheDocument();
});
