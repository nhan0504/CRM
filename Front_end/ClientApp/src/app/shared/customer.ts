export interface Customer {
    ID: string;
    FName: string;
    MInit: string | null;
    LName: string;
    Email: string | null;
    Phone: number | null;
    BirthDate: Date;
}