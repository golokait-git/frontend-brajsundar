import { NextResponse } from 'next/server';
const { parse } = require('rss-to-json');

export async function GET(req) {
    try {
        var searchParams = new URLSearchParams(req.url.split('?')[1]);
        var id = searchParams.get('id');
        var limit = parseInt(searchParams.get('limit')) || null;
        var page = parseInt(searchParams.get('page')) || 1;
        const rss = await parse('https://media.rss.com/onepurpose/feed.xml');
        const allItems = rss.items;
        var searchQuery = searchParams.get('q');
        if (searchQuery) {
            const filteredItems = allItems.filter(item => {
                return item.title.toLowerCase().includes(searchQuery.toLowerCase());
            });
            return NextResponse.json({
                total: filteredItems.length,
                items: filteredItems,
                next: null,
                previous: null,
            });
        }
        else if (id) {
            const filteredItems = allItems.filter(item => item.id === id);

            if (filteredItems.length > 0) {
                const startIndex = (page - 1) * limit;
                const endIndex = startIndex + limit;

                const limitedItems = limit ? filteredItems.slice(startIndex, endIndex) : filteredItems;

                const currentIndex = allItems.findIndex(item => item.id === id);

                const nextId = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1].id : null;
                const prevId = currentIndex > 0 ? allItems[currentIndex - 1].id : null;

                return NextResponse.json({
                    total: filteredItems.length,
                    items: limitedItems,
                    next: nextId,
                    previous: prevId,
                });
            } else {
                return NextResponse.json({
                    total: 0,
                    items: [],
                    next: null,
                    previous: null,
                });
            }
        } else {
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;

            const limitedItems = limit ? allItems.slice(startIndex, endIndex) : allItems;

            return NextResponse.json({
                total: allItems.length,
                items: limitedItems,
                next: null,
                previous: null,
            });
        }
    } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}

export const dynamic = 'force-dynamic';
