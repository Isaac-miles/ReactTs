import { render, screen } from '@testing-library/react';
import Heading from '../header';


test("renders heading prop correctly", ()=>{
    render(<Heading title='Testing the header'/>);
    const headingElement = screen.getByText(/Testing the header/i);
    expect(headingElement).toBeInTheDocument();
})

test("renders the heading  role", ()=>{
    render(<Heading title='Testing the header'/>);
    const headingElement = screen.getByRole("heading",{name:"Test"});
    expect(headingElement).toBeInTheDocument();
})

test("getting by title",()=>{
    render(<Heading />)
    const title = screen.getByTitle('header')
    expect(title).toBeInTheDocument();
})

test("getting by test-id",()=>{
    render(<Heading />)
    const testId = screen.getByTestId('header-2')
    expect(testId).toBeInTheDocument();
})

//Find by, this is async call
test("renders same  prop passed to it correctly",async ()=>{
    render(<Heading title='Testing the header'/>);
    const headingElement = await screen.findByText(/Testing the header/i);
    expect(headingElement).toBeInTheDocument();
})
