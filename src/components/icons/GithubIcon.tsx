import { ComponentWithAs, Icon, IconProps } from "@chakra-ui/react";

export const GithubIcon: ComponentWithAs<"div", IconProps> = (props: IconProps) => (
  <Icon color="text.secondary" viewBox="0 0 32 32" {...props}>
    <path
      d="M15.9983 0C7.16326 0 0 7.34446 0 16.4058C0 23.6533 4.58398 29.8018 10.9423 31.9719C11.7426 32.1221 12.0342 31.6155 12.0342 31.18C12.0342 30.7916 12.0209 29.7595 12.0129 28.3908C7.56207 29.382 6.62331 26.1913 6.62331 26.1913C5.8956 24.297 4.84631 23.7925 4.84631 23.7925C3.39355 22.7741 4.95616 22.7945 4.95616 22.7945C6.56205 22.9113 7.40695 24.4854 7.40695 24.4854C8.83441 26.9921 11.152 26.2678 12.0635 25.8486C12.2093 24.7885 12.6214 24.0656 13.0795 23.6553C9.52683 23.2417 5.79107 21.8334 5.79107 15.5477C5.79107 13.7571 6.41491 12.2922 7.43824 11.1454C7.27379 10.7303 6.72451 9.06266 7.5947 6.80382C7.5947 6.80382 8.93827 6.36284 11.9949 8.48583C13.2712 8.12199 14.6401 7.93972 16.0003 7.93358C17.3592 7.93972 18.7281 8.12199 20.0064 8.48583C23.0611 6.36284 24.402 6.80382 24.402 6.80382C25.2748 9.06266 24.7255 10.7303 24.5611 11.1454C25.5864 12.2922 26.2063 13.7571 26.2063 15.5477C26.2063 21.8498 22.4645 23.2362 18.8999 23.6424C19.4751 24.1489 19.9864 25.1496 19.9864 26.6808C19.9864 28.8734 19.9671 30.6428 19.9671 31.18C19.9671 31.6196 20.2547 32.1302 21.067 31.9698C27.42 29.7956 32 23.6512 32 16.4058C32 7.34446 24.8361 0 15.9983 0Z"
      fill="currentColor"
    />
  </Icon>
);