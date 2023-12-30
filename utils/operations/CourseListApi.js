import { apiconnector } from '../apiConnector'; // replace with your actual file path

export const dataFetcher = async () => {

    let courseData = [];
    try {
        const response = await apiconnector(
            'GET',
            'https://brajsundardas-api.edmingle.com/nuSource/api/v1/institute/5839/courses?get_tutors=1&get_tags=1&get_student_count=1&order_by=ASC&page=1&per_page=10',
            null, // bodyData
            null, // headers
            {
                get_tutors: 1,
                get_tags: 1,
                get_student_count: 1,
                order_by: 'ASC',
                page: 1,
                per_page: 10,
            } // params
        );
        // result = response;
        courseData = response.institute_courses[0];



        // logic for the only all course name lists

        // if (data && data.institute_courses && Array.isArray(data.institute_courses)) {
        //     // Extract data for each bundle
        //     const bundlesData = data.institute_courses.flatMap((course) => {
        //         return course.course_bundles.map((bundle) => ({
        //             bundleName: bundle.bundle_name,
        //             bundleDescription: bundle.bundle_description,
        //             imgUrl: bundle.img_url,
        //         }));
        //     });
        //     console.log('Bundle dataqef:', bundlesData);
        // } else {
        //     console.error('Invalid data structure:', data);
        // }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    // return result;
    return courseData;
};





// *********************** COURSE CATEGORY API *******************************

// for course category
export const coursedataFetcher = async () => {
    // const toastId = toast.loading("Loading..")
    let courseBundle = [];
    try {
        const response = await apiconnector(
            'GET',
            'https://brajsundardas-api.edmingle.com/nuSource/api/v1/institute/5839/courses?get_tutors=1&get_tags=1&get_student_count=1&order_by=ASC&page=1&per_page=10&&categories_ids=8102',
            null, // bodyData
            null, // headers
            {
                institution_id: 5839,
                form_type: 1,
            } // params
        );
        courseBundle = response;



    } catch (error) {
        console.error('Error fetching data:', error);
    }
    // toast.dismiss(toastId)
    // return result;
    return courseBundle;
}


// for workshop category

export const workshopdataFetcher = async () => {
    let workshopBundle = [];
    try {
        const response = await apiconnector(
            'GET',
            'https://brajsundardas-api.edmingle.com/nuSource/api/v1/institute/5839/courses?get_tutors=1&get_tags=1&get_student_count=1&order_by=ASC&page=1&per_page=10&&categories_ids=8145',
            null, // bodyData
            null, // headers
            {
                institution_id: 5839,
                categories_ids: 8145,
                form_type: 1,
            } // params
        );
        workshopBundle = response;



    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return workshopBundle;
}

// for coaching category

export const coachingdataFetcher = async () => {

    let coachingBundle = [];
    try {
        const response = await apiconnector(
            'GET',
            'https://brajsundardas-api.edmingle.com/nuSource/api/v1/institute/5839/courses?get_tutors=1&get_tags=1&get_student_count=1&order_by=ASC&page=1&per_page=10&&categories_ids=8146',
            null, // bodyData
            null, // headers
            {
                institution_id: 5839,
                form_type: 1,
            } // params
        );
        coachingBundle = response;



    } catch (error) {
        console.error('Error fetching data:', error);
    }

    // return result;
    return coachingBundle;
}





// Assuming you have an API endpoint for fetching categories
// const CATEGORY_API_ENDPOINT = 'https://brajsundardas-api.edmingle.com/nuSource/api/v1/meta/all';
// const INSTITUTION_ID = 5839;

// export const categoryFetcher = async () => {
//     try {
//         const response = await fetch("https://brajsundardas-api.edmingle.com/nuSource/api/v1/meta/all?institution_id=5839&form_type=1");
//         if (!response.ok) {
//             throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Category API response:', data);

//         // Extract categories from resources.stream
//         const categories = Array.isArray(data.resources?.stream) ? data.resources.stream : [];
//         console.log('Categories:', categories);

//         return categories;
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         throw error;
//     }
// };
