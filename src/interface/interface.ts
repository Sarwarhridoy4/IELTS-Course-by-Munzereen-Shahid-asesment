/* eslint-disable @typescript-eslint/no-explicit-any */
interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface CtaText {
  name: string;
  value: string;
}

interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

interface InstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface GroupJoinEngagementValue {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface FeatureExplanationValue {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface TestimonialValue {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb?: string;
  video_type: string;
  video_url: string;
}

interface FaqValue {
  answer: string;
  id: string;
  question: string;
}

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Array<
    | OfferValue
    | InstructorValue
    | FeatureValue
    | GroupJoinEngagementValue
    | PointerValue
    | AboutValue
    | FeatureExplanationValue
    | TestimonialValue
    | FaqValue
  >;
}

interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  price: number;
  original_price: number;
  discount: number;
  modality: string;
  old_info: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: any[];
  cta_text: CtaText;
  sections: CourseLayoutSection[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

interface ApiResponse {
  code: number;
  data: CourseData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}
interface CourseLayoutValue {
  icon: string;
  id: string;
  title: string;
  subtitle: string;
  text?: string;
  description?: string;
  checklist?: ChecklistItem[];
  background?: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta?: {
    clicked_url: string;
    color: string;
    text: string;
  };
  video_thumbnail?: string;
  video_type?: string;
  video_url?: string;
  top_left_icon_img?: string;
  title_color?: string;
  thumbnail?: string;
  description_color?: string;
  file_type?: string;
  file_url?: string;
  item?: string;
}

interface CourseLayoutSection {
  type: string;
  name: string;
  description?: string;
  values: CourseLayoutValue[];
}

export type {
  ApiResponse,
  CourseLayoutSection,
  CourseData,
  MediaItem,
  ChecklistItem,
  CtaText,
  OfferValue,
  InstructorValue,
  FeatureValue,
  GroupJoinEngagementValue,
  PointerValue,
  AboutValue,
  FeatureExplanationValue,
  TestimonialValue,
  FaqValue,
  Section,
};
