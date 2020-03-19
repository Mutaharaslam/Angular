export interface Student {
    id: number;
    name: string;
    age: number;
    class: string;
    section: any;
    address: any;
    courseId: number;
    course: {
      id: number;
      name: any
      duration: any;
      fee: number;
      startDate: any;
    };
}
