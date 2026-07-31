#include <iostream>
using namespace std;

int main() {
    int n, bt[20], wt[20], tat[20];
    int avwt = 0, avtat = 0;
    int i, j;

    cout << "Enter Total Number of Processes (Maximum 20): ";
    cin >> n;

    cout << "\nEnter Process Burst Time:\n";
    for (i = 0; i < n; i++) {
        cout << "P[" << i + 1 << "]: ";
        cin >> bt[i];
    }

    // Calculate Waiting Time
    wt[0] = 0;
    for (i = 1; i < n; i++) {
        wt[i] = 0;
        for (j = 0; j < i; j++)
            wt[i] += bt[j];
    }

    cout << "\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n";

    // Calculate Turnaround Time
    for (i = 0; i < n; i++) {
        tat[i] = bt[i] + wt[i];
        avwt += wt[i];
        avtat += tat[i];

        cout << "P[" << i + 1 << "]\t"
             << bt[i] << "\t\t"
             << wt[i] << "\t\t"
             << tat[i] << endl;
    }

    avwt /= n;
    avtat /= n;

    cout << "\nAverage Waiting Time = " << avwt << endl;
    cout << "Average Turnaround Time = " << avtat << endl;

    cout << "\nName : Naman Gupta" << endl;
    cout << "2503215300121" << endl;
    cout << "Branch : AIML - 1" << endl;

    return 0;
}