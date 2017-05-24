import React from 'react';
import { shallow,mount } from 'enzyme'
import ConnectedListPageHeader,{ ListPageHeader } from './';
import configureStore from 'redux-mock-store';


describe('<Header>', () => {
    it ('Render header', () => {
        const initialState= {
            data: {
                present: {
                    categories:{},
                    tasks:{
                        filters:{ololo:true},
                        activeTask:{id:12321}
                    }
                },
                past:[1],
                future:[]
            }

        };
        const mockStore = configureStore();
        const component = mount(
            <ListPageHeader />
        );

        // beforeEach(() => {
        //     store = mockStore(initialState);
        //     container = shallow(<ConnectedListPageHeader store={store} />)
        //     const title = container.find('Link');
        // });

        const store = mockStore(initialState);
        // const container = shallow(<ConnectedListPageHeader store={store} />);
        const container = shallow(<ConnectedListPageHeader store={store} />);
        const title = component.find('.todo-logo');

        console.log('КОНТЕЙНЕР ',container.props());
        // console.log('ЩА БУДЕТ',title.render().text());
        expect(title.render().text()).toBe('ToDo-List');
        expect(container.props().canUndo).toEqual(true);
        expect(container.props().canRedo).toEqual(false);
        expect(container.props().activeTask).toEqual({id:12321});
        expect(container.props().filters).toEqual({ololo:true});
    }),


    it('Test input values', () => {

        const component = mount(
            <ListPageHeader />
        );

        const handleSearch = jest.fn();
        const filterName = ReactTestUtils.renderIntoDocument(
            <Searchbar onSearch={handleSearch}/>
        );
        ReactTestUtils.Simulate.change(input, {target: {value: 'test'}});
        expect(handleSearch).toHaveBeenCalledWith('test')
    })
})