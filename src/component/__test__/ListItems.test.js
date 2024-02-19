import { render, screen } from '@testing-library/react';
import ListItems from '../listItems';
import { MyProvider } from '../../context/context';

const MockedItemList = ({items,completedItems})=>{
    <MyProvider>
        <ListItems items={items} completedItems={completedItems}/>
    </MyProvider>
}

test("should render the correct amount of Active task", async()=>{
    render(<MockedItemList items={3} completedItems={1} />);

    const activeTasks =  screen.getByText(/Active/i);
    expect(activeTasks).toBeInTheDocument();
})
