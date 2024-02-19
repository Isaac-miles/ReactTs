import { render, screen } from '@testing-library/react';
import ListItems from '../listItems';


test("rshould render the correct amount of Active task", ()=>{
    render(<ListItems items={2} completedItems={5}/>);

    const activeTasks = screen.getByText(/Testing the header/i);
    expect(activeTasks).toBeInTheDocument();
})
