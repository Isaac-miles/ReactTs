import { render, screen } from '@testing-library/react';
import ListItems from '../listItems';
import { MyProvider } from '../../context/context';

const MockedItemList = ()=>{
    <MyProvider>
        <ListItems items={2} completedItems={5}/>
    </MyProvider>
}

test("should render the correct amount of Active task", ()=>{
    render(<MockedItemList />);

    const activeTasks = screen.getByText(/Active tasks/i);
    expect(activeTasks).toBeInTheDocument();
})
