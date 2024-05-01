
// schemas/course.js

export default {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: Rule => Rule.required().min(0).max(5),
        },
    ],
};