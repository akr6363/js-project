test ("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]



    const oldAges = ages.filter((age) => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test ("should take courses chipper then 160", () => {
    const courses: Array<CourseType> = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ]


    const cheapCourses = courses.filter((course) =>  course.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('css')
    expect(cheapCourses[1].title).toBe('react')

})