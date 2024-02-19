import { render, screen } from '@testing-library/react';
import Heading from '../header';


test("renders heading prop correctly",()=>{
    render(<Heading title='Testing the header'/>);
    const headingElement = screen.getByText(/Testing the header/i);
    expect(headingElement).toBeInTheDocument();
})