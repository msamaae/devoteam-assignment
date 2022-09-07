import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
	it('renders props.title when passed', () => {
		const title = 'Meet the Team';

		const wrapper = shallowMount(Header, {
			propsData: { title },
		});

		// Assert the rendered text of the component
		expect(wrapper.text()).toMatch(title);
	});

	it('emits the search text, sort direction and toggle view', async () => {
		const wrapper = shallowMount(Header);
		const searchText = 'John Doe';
		const sortDirection = 'asc';
		const toggleView = 'grid';

		wrapper.vm.$emit('search-text', searchText);
		wrapper.vm.$emit('sort-direction', sortDirection);
		wrapper.vm.$emit('toggle-view', toggleView);

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		// Assert event has been emitted
		expect(wrapper.emitted('search-text')).toBeTruthy();
		expect(wrapper.emitted('sort-direction')).toBeTruthy();
		expect(wrapper.emitted('toggle-view')).toBeTruthy();

		// Assert event count
		expect(wrapper.emitted('search-text').length).toBe(1);
		expect(wrapper.emitted('sort-direction').length).toBe(1);
		expect(wrapper.emitted('toggle-view').length).toBe(1);

		// Assert event payload
		expect(wrapper.emitted('search-text')[0]).toEqual([searchText]);
		expect(wrapper.emitted('sort-direction')[0]).toEqual([sortDirection]);
		expect(wrapper.emitted('toggle-view')[0]).toEqual([toggleView]);
	});
});
