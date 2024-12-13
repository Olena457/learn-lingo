import { database } from '../config/firebase.js';
import { ref, push, set } from 'firebase/database';
const addTeachersToDatabase = async teachers => {
  const teachersRef = ref(database, 'teachers');
  try {
    for (const teacher of teachers) {
      const newTeacherRef = push(teachersRef);
      await set(newTeacherRef, teacher);
      console.log('Teacher added with ID:', newTeacherRef.key);
    }
    console.log('All teachers added successfully');
  } catch (error) {
    console.error('Error adding teachers:', error);
  }
};
const teachers = [
  {
    name: 'John',
    surname: 'Doe',
    languages: ['English', 'Spanish'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
      'C1 Advanced',
      'C2 Proficient',
    ],
    rating: 4.5,
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment: 'John is an excellent teacher! I highly recommend him.',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 4,
        comment:
          'John is very knowledgeable and patient. I enjoyed his classes.',
      },
    ],
    price_per_hour: 25,
    lessons_done: 1375,
    avatar_url: 'https://ftp.goit.study/img/avatars/1.jpg',
    lesson_info:
      'The lessons focus on improving speaking and listening skills through interactive activities and discussions.',
    conditions: [
      'Teaches only adult learners (18 years and above).',
      'Flexible scheduling options available.',
    ],
    experience:
      'John has been teaching languages for 7 years and has extensive experience in helping students improve their language skills. He has successfully taught numerous students from different backgrounds and proficiency levels.',
  },
  {
    name: 'Jane',
    surname: 'Smith',
    languages: ['French', 'German'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
    ],
    rating: 4.8,
    reviews: [
      {
        reviewer_name: 'Eve',
        reviewer_rating: 5,
        comment: 'Jane is an amazing teacher! She is patient and supportive.',
      },
      {
        reviewer_name: 'Frank',
        reviewer_rating: 4,
        comment: "Jane's lessons were very helpful. I made good progress.",
      },
    ],
    price_per_hour: 30,
    lessons_done: 1098,
    avatar_url: 'https://ftp.goit.study/img/avatars/2.jpg',
    lesson_info:
      'Lessons are structured to cover grammar, vocabulary, and practical usage of the language.',
    conditions: [
      'Welcomes both adult learners and teenagers (13 years and above).',
      'Provides personalized study plans.',
    ],
    experience:
      "Jane is an experienced and dedicated language teacher specializing in German and French. She holds a Bachelor's degree in German Studies and a Master's degree in French Literature. Her passion for languages and teaching has driven her to become a highly proficient and knowledgeable instructor. With over 10 years of teaching experience, Jane has helped numerous students of various backgrounds and proficiency levels achieve their language learning goals. She is skilled at adapting her teaching methods to suit the needs and learning styles of her students, ensuring that they feel supported and motivated throughout their language journey.",
  },
  {
    name: 'David',
    surname: 'Johnson',
    languages: ['Mandarin Chinese'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.2,
    reviews: [
      {
        reviewer_name: 'Grace',
        reviewer_rating: 4,
        comment:
          'David explains things clearly and is knowledgeable in the subject.',
      },
      {
        reviewer_name: 'Henry',
        reviewer_rating: 3,
        comment:
          "David's teaching style didn't suit me, but he is still a good teacher.",
      },
    ],
    price_per_hour: 35,
    lessons_done: 1203,
    avatar_url: 'https://ftp.goit.study/img/avatars/3.jpg',
    lesson_info:
      'Lessons focus on developing all four language skills: speaking, listening, reading, and writing.',
    conditions: [
      'Teaches all age groups, including children, teenagers, and adults.',
      'Offers group lessons at discounted rates.',
    ],
    experience:
      'David has been teaching Mandarin Chinese for 4 years. He has a passion for language teaching and is dedicated to helping his students succeed. With a solid understanding of the language and culture, David ensures that his lessons are both informative and enjoyable.',
  },
  {
    name: 'Sarah',
    surname: 'Johnson',
    languages: ['English'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.6,
    reviews: [
      {
        reviewer_name: 'Emily',
        reviewer_rating: 4,
        comment:
          'Sarah is a patient and helpful teacher. I enjoyed her lessons.',
      },
      {
        reviewer_name: 'Alex',
        reviewer_rating: 5,
        comment:
          "Sarah's teaching style is engaging and effective. Highly recommended.",
      },
    ],
    price_per_hour: 28,
    lessons_done: 1120,
    avatar_url: 'https://ftp.goit.study/img/avatars/4.jpg',
    lesson_info:
      'Lessons focus on building conversational skills and grammar knowledge.',
    conditions: [
      'Teaches adults and teenagers (15 years and above).',
      'Flexible lesson timings available.',
    ],
    experience:
      'Sarah has been teaching English for 6 years. She has worked with students from diverse backgrounds and understands the challenges they face while learning a new language. Her teaching approach emphasizes practical communication skills and ensures a supportive and engaging learning environment.',
  },
  {
    name: 'Michael',
    surname: 'Brown',
    languages: ['Spanish'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
    ],
    rating: 4.4,
    reviews: [
      {
        reviewer_name: 'Sophia',
        reviewer_rating: 5,
        comment:
          'Michael is an excellent teacher. He makes learning Spanish fun and engaging.',
      },
      {
        reviewer_name: 'Oliver',
        reviewer_rating: 4,
        comment:
          "I have made great progress with Michael's lessons. Highly recommended.",
      },
    ],
    price_per_hour: 32,
    lessons_done: 1355,
    avatar_url: 'https://ftp.goit.study/img/avatars/5.jpg',
    lesson_info:
      'Lessons focus on developing speaking fluency and listening comprehension.',
    conditions: [
      'Teaches adults, teenagers, and children (10 years and above).',
      'Customized study materials provided.',
    ],
    experience:
      "Michael has been teaching Spanish for 5 years. He has a deep understanding of the language and culture, which he incorporates into his lessons. Michael's teaching style is interactive and dynamic, fostering an enjoyable learning experience while helping students achieve their language goals.",
  },
  {
    name: 'Emma',
    surname: 'Wilson',
    languages: ['French', 'Italian'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.9,
    reviews: [
      {
        reviewer_name: 'Liam',
        reviewer_rating: 5,
        comment:
          'Emma is an amazing teacher. Her lessons are interactive and engaging.',
      },
      {
        reviewer_name: 'Mia',
        reviewer_rating: 4,
        comment:
          "I have learned a lot from Emma's lessons. Highly recommended for French and Italian.",
      },
    ],
    price_per_hour: 27,
    lessons_done: 1425,
    avatar_url: 'https://ftp.goit.study/img/avatars/6.jpg',
    lesson_info:
      'Lessons focus on improving language skills through conversation practice and cultural insights.',
    conditions: [
      'Teaches adults and teenagers (16 years and above).',
      'Flexible lesson packages available.',
    ],
    experience:
      "Emma has been teaching French and Italian for 8 years. She has a strong background in language education and a passion for helping students succeed. Emma's teaching approach is student-centered, incorporating interactive activities and authentic materials to create a dynamic and immersive learning environment.",
  },
  {
    name: 'Alexander',
    surname: 'Lee',
    languages: ['English', 'Korean'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.7,
    reviews: [
      {
        reviewer_name: 'Sophie',
        reviewer_rating: 5,
        comment:
          'Alexander is a patient and knowledgeable teacher. I have learned a lot from his lessons.',
      },
      {
        reviewer_name: 'Daniel',
        reviewer_rating: 4,
        comment:
          'I highly recommend Alexander. His lessons are engaging and well-structured.',
      },
    ],
    price_per_hour: 30,
    lessons_done: 1230,
    avatar_url: 'https://ftp.goit.study/img/avatars/7.jpg',
    lesson_info:
      'Lessons focus on building language skills through interactive activities and cultural discussions.',
    conditions: [
      'Teaches adults and teenagers (16 years and above).',
      'Flexible lesson timings available.',
    ],
    experience:
      "Alexander has been teaching English and Korean for 5 years. He has a strong background in language education and has successfully helped numerous students improve their language proficiency. Alexander's teaching style is student-centered, and he creates a supportive and engaging learning environment to maximize his students' language learning potential.",
  },
  {
    name: 'Sophia',
    surname: 'Garcia',
    languages: ['Spanish', 'French'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
    ],
    rating: 4.9,
    reviews: [
      {
        reviewer_name: 'Ethan',
        reviewer_rating: 5,
        comment:
          'Sophia is an excellent teacher. Her lessons are fun and interactive.',
      },
      {
        reviewer_name: 'Ava',
        reviewer_rating: 4,
        comment:
          "I have improved my Spanish and French skills significantly with Sophia's lessons.",
      },
    ],
    price_per_hour: 35,
    lessons_done: 1450,
    avatar_url: 'https://ftp.goit.study/img/avatars/8.jpg',
    lesson_info:
      'Lessons focus on speaking fluency, grammar, and cultural understanding.',
    conditions: [
      'Teaches adults, teenagers, and children (10 years and above).',
      'Customized study materials provided.',
    ],
    experience:
      "Sophia has been teaching Spanish and French for 7 years. She has extensive experience in language instruction and is dedicated to helping her students achieve their language goals. Sophia's lessons are designed to be interactive and enjoyable, fostering a love for languages while developing strong language skills.",
  },
  {
    name: 'Max',
    surname: 'Andersen',
    languages: ['German'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.6,
    reviews: [
      {
        reviewer_name: 'Olivia',
        reviewer_rating: 4,
        comment:
          'Max is a dedicated and knowledgeable teacher. I enjoyed his German lessons.',
      },
      {
        reviewer_name: 'Noah',
        reviewer_rating: 5,
        comment:
          'I highly recommend Max for German lessons. He explains concepts clearly and provides useful tips.',
      },
    ],
    price_per_hour: 28,
    lessons_done: 1305,
    avatar_url: 'https://ftp.goit.study/img/avatars/9.jpg',
    lesson_info:
      'Lessons focus on building a strong foundation in German language skills.',
    conditions: [
      'Teaches adults and teenagers (15 years and above).',
      'Flexible lesson timings available.',
    ],
    experience:
      "Max has been teaching German for 6 years and has a deep understanding of the language. He has helped numerous students gain proficiency in German through his structured and comprehensive lessons. Max's teaching approach is tailored to each student's needs, ensuring a personalized and effective learning experience.",
  },
  {
    name: 'Isabella',
    surname: 'Lopez',
    languages: ['English', 'Spanish'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.8,
    reviews: [
      {
        reviewer_name: 'Liam',
        reviewer_rating: 5,
        comment:
          'Isabella is a fantastic teacher. Her lessons are engaging and effective.',
      },
      {
        reviewer_name: 'Mia',
        reviewer_rating: 4,
        comment:
          "I have made significant progress with Isabella's lessons. Highly recommended.",
      },
    ],
    price_per_hour: 25,
    lessons_done: 1125,
    avatar_url: 'https://ftp.goit.study/img/avatars/10.jpg',
    lesson_info:
      'Lessons focus on building language skills through conversation practice and cultural insights.',
    conditions: [
      'Teaches adults and teenagers (16 years and above).',
      'Flexible lesson packages available.',
    ],
    experience:
      "Isabella has been teaching English and Spanish for 5 years. She has a passion for language teaching and strives to create a supportive and interactive learning environment for her students. Isabella's lessons are tailored to each student's needs, helping them develop their language skills and gain confidence in their language abilities.",
  },
  {
    name: 'Daniel',
    surname: 'Martinez',
    languages: ['French'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
    ],
    rating: 4.7,
    reviews: [
      {
        reviewer_name: 'Sophie',
        reviewer_rating: 5,
        comment:
          'Daniel is an excellent teacher. His lessons are well-structured and enjoyable.',
      },
      {
        reviewer_name: 'Benjamin',
        reviewer_rating: 4,
        comment:
          "I have learned a lot from Daniel's lessons. Highly recommended for French learners.",
      },
    ],
    price_per_hour: 30,
    lessons_done: 1260,
    avatar_url: 'https://ftp.goit.study/img/avatars/11.jpg',
    lesson_info:
      'Lessons focus on improving language skills through interactive activities and cultural discussions.',
    conditions: [
      'Teaches adults and teenagers (15 years and above).',
      'Flexible lesson timings available.',
    ],
    experience:
      "Daniel has been teaching French for 7 years and has extensive experience in language instruction. He is dedicated to helping his students develop their language skills in an engaging and effective manner. Daniel's lessons incorporate a variety of activities and materials to provide a comprehensive learning experience.",
  },
  {
    name: 'Olivia',
    surname: 'Taylor',
    languages: ['Italian'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.9,
    reviews: [
      {
        reviewer_name: 'Jacob',
        reviewer_rating: 5,
        comment:
          'Olivia is an amazing Italian teacher. Her lessons are engaging and informative.',
      },
      {
        reviewer_name: 'Emily',
        reviewer_rating: 4,
        comment:
          "I have improved my Italian skills significantly with Olivia's lessons. Highly recommended.",
      },
    ],
    price_per_hour: 27,
    lessons_done: 1325,
    avatar_url: 'https://ftp.goit.study/img/avatars/12.jpg',
    lesson_info:
      'Lessons focus on speaking fluency, grammar, and cultural understanding.',
    conditions: [
      'Teaches adults and teenagers (16 years and above).',
      'Customized study materials provided.',
    ],
    experience:
      "Olivia has been teaching Italian for 6 years and has a passion for sharing the Italian language and culture with her students. She creates engaging and interactive lessons that foster language proficiency and cultural understanding. Olivia's teaching approach is student-centered and aims to inspire a love for the Italian language and its rich cultural heritage.",
  },

  {
    name: 'Ethan',
    surname: 'Gonzalez',
    languages: ['English', 'Spanish'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
    ],
    rating: 4.6,
    reviews: [
      {
        reviewer_name: 'Ava',
        reviewer_rating: 5,
        comment:
          'Ethan is an excellent teacher. His lessons are engaging and tailored to individual needs.',
      },
      {
        reviewer_name: 'Noah',
        reviewer_rating: 4,
        comment:
          'I highly recommend Ethan. He makes learning languages enjoyable and productive.',
      },
    ],
    price_per_hour: 28,
    lessons_done: 1285,
    avatar_url: 'https://ftp.goit.study/img/avatars/13.jpg',
    lesson_info:
      'Lessons focus on building language skills through interactive activities and practical exercises.',
    conditions: [
      'Teaches adults and teenagers (15 years and above).',
      'Flexible lesson timings available.',
    ],
    experience:
      "Ethan has been teaching English and Spanish for 6 years. He has a wealth of experience in language instruction and is skilled at adapting his teaching methods to meet the unique needs of each student. Ethan's lessons are dynamic and interactive, incorporating a variety of engaging activities to ensure effective language learning.",
  },
  {
    name: 'Emily',
    surname: 'Clark',
    languages: ['French', 'German'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.8,
    reviews: [
      {
        reviewer_name: 'Liam',
        reviewer_rating: 5,
        comment:
          'Emily is an excellent teacher. Her lessons are well-structured and informative.',
      },
      {
        reviewer_name: 'Mia',
        reviewer_rating: 4,
        comment:
          "I have learned a lot from Emily's lessons. Highly recommended for French and German learners.",
      },
    ],
    price_per_hour: 30,
    lessons_done: 1350,
    avatar_url: 'https://ftp.goit.study/img/avatars/14.jpg',
    lesson_info:
      'Lessons focus on improving language skills through conversation practice and cultural insights.',
    conditions: [
      'Teaches adults and teenagers (16 years and above).',
      'Flexible lesson packages available.',
    ],
    experience:
      "Emily has been teaching French and German for 7 years. She has a deep understanding of the languages and cultures and uses her expertise to create engaging and informative lessons. Emily's teaching approach is student-centered, fostering a supportive and interactive learning environment to help her students achieve their language goals.",
  },
];
addTeachersToDatabase(teachers);
