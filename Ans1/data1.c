#nclude <stdio.h>
#include <stdlib.h>

void find_peaks(double *data, int size) {
    printf("Index of Maxima:\n");
    for (int i = 1; i < size - 1; i++) {
        if (data[i] > data[i-1] && data[i] > data[i+1]) {
            printf("Maxima at index %d: %lf\n", i, data[i]);
        }
    }

    printf("Index of Minima:\n");
    for (int i = 1; i < size - 1; i++) {
        if (data[i] < data[i-1] && data[i] < data[i+1]) {
            printf("Minima at index %d: %lf\n", i, data[i]);
        }
    }
}

int main() {
    FILE *file = fopen("Data_1.txt", "r"); // Assuming 'Data_1.txt' is the filename
    if (file == NULL) {
        printf("Error opening file.\n");
        return 1;
    }

    int size = 0;
    fscanf(file, "%d", &size); // Assuming first line contains size

    double *data = (double*) malloc(size * sizeof(double));
    for (int i = 0; i < size; i++) {
        fscanf(file, "%lf", &data[i]);
    }
    fclose(file);

    find_peaks(data, size);
    free(data);

    return 0;
}
