export const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // Sử dụng định dạng 24 giờ
    };
  
    return new Date(date).toLocaleTimeString('en-US', options);
  }
  