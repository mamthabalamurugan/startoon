import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks

# Load the data from text files

data_2 = np.loadtxt('Data_2.txt')

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


# Plot Data_2
plt.subplot(1, 2, 2)
plt.plot(data_2, label='Data_2')
plt.scatter(peaks_2, data_2[peaks_2], color='red', label='Maxima')
plt.scatter(minima_2, data_2[minima_2], color='blue', label='Minima')
plt.xlabel('Index')
plt.ylabel('Value')
plt.title('Data_2 Peaks and Minima')
plt.legend()

# Show the plots
plt.tight_layout()
plt.show()
