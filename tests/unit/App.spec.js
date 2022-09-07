import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';
import Grid from '@/components/Grid.vue';
import List from '@/components/List.vue';

import { mockUsers } from './mockUsers';

describe('App.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(App);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders grid view as default', () => {
		const wrapper = shallowMount(App);
		expect(wrapper.findComponent(Grid).exists()).toBe(true);
	});

	it('does not render list view as default', () => {
		const wrapper = shallowMount(App);
		expect(wrapper.findComponent(List).exists()).toBe(false);
	});

	it('renders list view when toggled', async () => {
		const wrapper = shallowMount(App);
		const toggleView = 'list';

		await wrapper.setData({ toggleView: toggleView });
		expect(wrapper.findComponent(List).exists()).toBe(true);
	});

	it('renders grid view when toggled', async () => {
		const wrapper = shallowMount(App);
		const toggleView = 'grid';

		await wrapper.setData({ toggleView: toggleView });
		expect(wrapper.findComponent(Grid).exists()).toBe(true);
	});

	it('filters users based on search input', () => {
		const wrapper = shallowMount(App);
		const searchText = 'Eira';

		wrapper.setData({ users: mockUsers });
		wrapper.setData({ searchText: searchText });

		expect(wrapper.vm.usersFiltered[0].name.first).toBe(searchText);
	});

	it('sorts users first name in descending order', () => {
		const wrapper = shallowMount(App);
		const sortDirection = 'desc';

		wrapper.setData({ users: mockUsers });
		wrapper.setData({ sortDirection: sortDirection });

		expect(wrapper.vm.usersSorted[0].name.first).toBe('Eira');
	});

	it('sorts users first name in ascending order', () => {
		const wrapper = shallowMount(App);
		const sortDirection = 'asc';

		wrapper.setData({ users: mockUsers });
		wrapper.setData({ sortDirection: sortDirection });

		expect(wrapper.vm.usersSorted[0].name.first).toBe('Ved');
	});

	it('displays an error text if there is one', async () => {
		const wrapper = shallowMount(App);
		const errorText = 'Could not load users. Try reloading again!';

		await wrapper.setData({ errorText: errorText });

		expect(wrapper.find('.error-text').exists()).toBe(true);
	});
});
