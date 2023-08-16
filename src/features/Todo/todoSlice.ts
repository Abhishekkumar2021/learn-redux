import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export interface Album {
    userId: number
    id: number
    title: string
}

export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const baseUrl = "https://jsonplaceholder.typicode.com/"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
        }),
        getPost: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
        getComments: builder.query<Comment[], number>({
            query: (id) => `posts/${id}/comments`,
        }),
        getAlbums: builder.query<Album[], void>({
            query: () => "albums",
        }),
        getAlbum: builder.query<Album, number>({
            query: (id) => `albums/${id}`,
        }),
        getPhotos: builder.query<Photo[], number>({
            query: (id) => `albums/${id}/photos`,
        }),
    })
})

export const {useGetPostsQuery, useGetPostQuery, useGetCommentsQuery, useGetAlbumsQuery, useGetAlbumQuery, useGetPhotosQuery}  = apiSlice


