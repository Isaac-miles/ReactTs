import { render, screen } from '@testing-library/react';
import Heading from '../header';


test("renders heading prop correctly",async ()=>{
    render(<Heading title='Testing the header'/>);
    const headingElement = screen.getByText(/Testing the header/i);
    expect(headingElement).toBeInTheDocument();
})

test("renders the heading  role",async ()=>{
    render(<Heading title='Testing the header'/>);
    const headingElement = screen.getByRole("heading",{name:"Test"});
    expect(headingElement).toBeInTheDocument();
})

test("getting by title",async()=>{
    render(<Heading />)
})