import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import supabase from './supabase';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getUser: builder.query({
			queryFn: async () => {
				const { data, error } = await supabase.auth.getUser();

				if (error) {
					throw new Error(error.message);
				}

				return { data };
			},
		}),
	}),
});

export const { useGetUserQuery } = authApi;
