export interface FormDataModel {
    name: string,
    email: string
    topics: string[];
}

export interface TopicsFormProps {
  onNextStep: (step: number) => void,
  onHandleFormData: (options: string) => void,
  formData: FormDataModel,
}

export interface SummaryProps {
  onBack: (step: number) => void
  resetFormData: () => void,
  formData: FormDataModel;
}

export interface RegisterFormProps {
  onNextStep: (step: number) => void;
  onHandleFormData: (event: React.ChangeEvent<HTMLInputElement>) => void,
  formData: FormDataModel
}