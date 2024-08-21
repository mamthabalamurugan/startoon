import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks

# Load the data from text files
data_1 = np.loadtxt('Data_1.txt')

# Define a function to find peaks and minima
def find_peaks_and_minima(data):
    # Find local maxima (peaks)
    peaks, _ = find_peaks(data)
    
    # Find local minima by finding peaks of the negative data
    minima, _ = find_peaks(-data)
    
    return peaks, minima

# Analyze both datasets
peaks_1, minima_1 = find_peaks_and_minima(data_1)
peaks_2, minima_2 = find_peaks_and_minima(data_2)

# Plotting Data_1
plt.figure(figsize=(12, 6))

# Plot Data_1
plt.subplot(1, 2, 1)
plt.plot(data_1, label='Data_1')
plt.scatter(peaks_1, data_1[peaks_1], color='red', label='Maxima')
plt.scatter(minima_1, data_1[minima_1], color='blue', label='Minima')
plt.xlabel('Index')
plt.ylabel('Value')
plt.title('Data_1 Peaks and Minima')
plt.legend()



# Show the plots
plt.tight_layout()
plt.show()
