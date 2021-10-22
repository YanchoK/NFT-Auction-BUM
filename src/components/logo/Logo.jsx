
export default function Logo({ type }) {
    return (
         type ? 
        //  <img src='../../public/images/logo-muted.svg'/>
        //  : 
        //  <img src='../../public/images/logo.svg'/>
        
        <svg width="135" height="62" viewBox="0 0 135 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="135" height="62" fill="#303042"/>
            <path d="M38.0864 31.3853C39.624 31.9557 40.8143 32.7864 41.6575 33.8776C42.5007 34.9687 42.9223 36.2831 42.9223 37.8206C42.9223 40.1022 41.9799 41.8753 40.0952 43.1401C38.2104 44.38 35.4825 45 31.9114 45H17.2552V18.9609H31.1675C34.6394 18.9609 37.2557 19.5809 39.0164 20.8208C40.8019 22.0608 41.6947 23.7099 41.6947 25.7683C41.6947 26.9834 41.3847 28.0746 40.7647 29.0418C40.1696 30.0089 39.2768 30.7901 38.0864 31.3853ZM25.8853 25.0987V28.9674H29.9771C31.8866 28.9674 32.8414 28.3226 32.8414 27.033C32.8414 25.7435 31.8866 25.0987 29.9771 25.0987H25.8853ZM31.1675 38.8622C33.1018 38.8622 34.069 38.1802 34.069 36.8163C34.069 35.4523 33.1018 34.7704 31.1675 34.7704H25.8853V38.8622H31.1675ZM58.4876 45.5952C54.4949 45.5952 51.3826 44.5164 49.1507 42.3589C46.9188 40.2014 45.8028 37.1759 45.8028 33.2824V18.9609H54.5817V33.022C54.5817 34.9315 54.9165 36.3203 55.5861 37.1883C56.2805 38.0562 57.2724 38.4902 58.562 38.4902C59.8515 38.4902 60.8311 38.0562 61.5007 37.1883C62.1951 36.3203 62.5423 34.9315 62.5423 33.022V18.9609H71.1724V33.2824C71.1724 37.1759 70.0564 40.2014 67.8245 42.3589C65.5925 44.5164 62.4803 45.5952 58.4876 45.5952ZM98.4457 45L98.3713 33.1336L92.7171 42.6565H88.8484L83.1942 33.5428V45H75.1965V18.9609H82.413L90.8944 32.836L99.1525 18.9609H106.369L106.443 45H98.4457ZM114.222 45.372C112.808 45.372 111.63 44.9256 110.688 44.0328C109.77 43.1153 109.311 41.9497 109.311 40.5362C109.311 39.1226 109.77 37.9818 110.688 37.1139C111.63 36.2211 112.808 35.7747 114.222 35.7747C115.635 35.7747 116.801 36.2211 117.718 37.1139C118.661 37.9818 119.132 39.1226 119.132 40.5362C119.132 41.9497 118.661 43.1153 117.718 44.0328C116.801 44.9256 115.635 45.372 114.222 45.372Z" fill="#181828"/>
        </svg>
        : 
        <svg width="135" height="62" viewBox="0 0 135 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="135" height="62" fill="#4E24F2"/>
            <path d="M38.0864 31.3853C39.624 31.9557 40.8143 32.7864 41.6575 33.8776C42.5007 34.9687 42.9223 36.2831 42.9223 37.8206C42.9223 40.1022 41.9799 41.8753 40.0952 43.1401C38.2104 44.38 35.4825 45 31.9114 45H17.2552V18.9609H31.1675C34.6394 18.9609 37.2557 19.5809 39.0164 20.8208C40.8019 22.0608 41.6947 23.7099 41.6947 25.7683C41.6947 26.9834 41.3847 28.0746 40.7647 29.0418C40.1696 30.0089 39.2768 30.7901 38.0864 31.3853ZM25.8853 25.0987V28.9674H29.9771C31.8866 28.9674 32.8414 28.3226 32.8414 27.033C32.8414 25.7435 31.8866 25.0987 29.9771 25.0987H25.8853ZM31.1675 38.8622C33.1018 38.8622 34.069 38.1802 34.069 36.8163C34.069 35.4523 33.1018 34.7704 31.1675 34.7704H25.8853V38.8622H31.1675ZM58.4876 45.5952C54.4949 45.5952 51.3826 44.5164 49.1507 42.3589C46.9188 40.2014 45.8028 37.1759 45.8028 33.2824V18.9609H54.5817V33.022C54.5817 34.9315 54.9165 36.3203 55.5861 37.1883C56.2805 38.0562 57.2724 38.4902 58.562 38.4902C59.8515 38.4902 60.8311 38.0562 61.5007 37.1883C62.1951 36.3203 62.5423 34.9315 62.5423 33.022V18.9609H71.1724V33.2824C71.1724 37.1759 70.0564 40.2014 67.8245 42.3589C65.5925 44.5164 62.4803 45.5952 58.4876 45.5952ZM98.4457 45L98.3713 33.1336L92.7171 42.6565H88.8484L83.1942 33.5428V45H75.1965V18.9609H82.413L90.8944 32.836L99.1525 18.9609H106.369L106.443 45H98.4457ZM114.222 45.372C112.808 45.372 111.63 44.9256 110.688 44.0328C109.77 43.1153 109.311 41.9497 109.311 40.5362C109.311 39.1226 109.77 37.9818 110.688 37.1139C111.63 36.2211 112.808 35.7747 114.222 35.7747C115.635 35.7747 116.801 36.2211 117.718 37.1139C118.661 37.9818 119.132 39.1226 119.132 40.5362C119.132 41.9497 118.661 43.1153 117.718 44.0328C116.801 44.9256 115.635 45.372 114.222 45.372Z" fill="white"/>
        </svg>
      );
}
